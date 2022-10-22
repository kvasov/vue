<template>
  <div>
    <div class="buttons">
      <my-button @click="showDialog">Create new post</my-button>
      <my-select v-model="selectedSort" :options="sortOptions">
      </my-select>
    </div>
    <my-input v-model="searchQuery" />
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </my-dialog>

    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Loading...</div>
    <div class="pages">
      <div
        v-for="pageNum in totalPages"
        :key="pageNum"
        :class="{'current': pageNum === this.page}"
        @click="changePage(pageNum)"
      >
          {{pageNum}}
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import axios from 'axios';

export default {
  components: {
    PostForm, PostList
  },

  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {
          value: 'title', name: 'By name'
        },
        {
          value: 'body', name: 'By body'
        }
      ]
    }
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id != post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
    changePage(pageNum) {
      this.page = pageNum;
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data;
      } catch (e) {
        console.log('error');
      } finally {
        this.isPostsLoading = false;
      }
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2 ) =>  post1[this.selectedSort ]?.localeCompare(post2[this.selectedSort  ])
      )
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.includes(this.searchQuery))
    }
  },
  watch: {
    page() {
      this.fetchPosts()
    }
  }
}
</script>

<style lang="scss">
  body {
    padding: 10px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .buttons {
    display: flex;
    align-items: flex-start;

    button {
      margin-right: 10px;
    }
  }

  .pages {
    display: flex;

    div {
      margin-right: 4px;
      border: 1px solid #ccc;
      padding: 2px 4px;
      cursor: pointer;

      &.current {
        background-color: #000;
        border-color: #000;
        color: #fff;
        cursor: default;
      }
    }
  }
</style>
