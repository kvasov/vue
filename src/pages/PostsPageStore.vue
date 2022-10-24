<template>
  <div>
    likes: {{$store.state.likes}} *2= {{$store.getters.doubleLikes}}
    <br/>
    <a @click="$store.commit('increment')">+</a><a @click="$store.commit('decrement')">-</a>
    <br>

    <div class="buttons">
      <my-button @click="showDialog">Create new</my-button>
      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions">
      </my-select>
    </div>
    <my-input v-focus @update:model-value="setSearchQuery" />
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </my-dialog>
    <!-- <post-pagination
      :totalPages="this.totalPages"
      :currentPage="this.page"
      @changePage="changePage"
    /> -->
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Loading...</div>
    <div v-intersection="{f: loadMorePosts}" class="observer"></div>

  </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import PostPagination from '@/components/PostPagination';
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  components: {
    PostForm, PostList, PostPagination
  },

  data() {
    return {
      dialogVisible: false,
    }
  },

  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
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
    canLoadMore() {
      this.page < this.totalPages;
    },


  },
  mounted() {
    this.fetchPosts();
    // var options = {
    //   rootMargin: '0px',
    //   threshold: 1.0
    // }
    // var callback = (entries, observer) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts();
    //   }
    // }
    // var observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  },
  watch: {
    // page() {
    //   this.fetchPosts()
    // }
  }
}
</script>

<style lang="scss">

</style>
