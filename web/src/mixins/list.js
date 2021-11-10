export default {
  data() {
    return {
      page: {
        current: 0,
        size: 10
      },
      list: [], // 列表数据
      loading: false,
      finished: false
    }
  },
  created() {
  },
  methods: {
    /**
         * 获取列表数据
         */
    getList(flag = false) {
      return new Promise(
        async(resolve, reject) => {
          this.loading = true
          !flag && (this.page.current += 1)
          try {
            let deleKeys, records
            if (this._beforeGetList) {
              deleKeys = await this._beforeGetList()
            }
            const query = this.getQuery(this.search, deleKeys)
            const { data } = await this.getListApi(query)
            records = this._afterGetList ? await this._afterGetList(data) : data.records
            this.list = flag ? records : this.list.concat(records)
            this.finished = this.page.current * this.page.size >= data.total
            this.loading = false
            resolve()
          } catch (error) {
            // if (error) {
            //   this.loading = false
            //   this.finished = true
            // }
            this.loading = false
            this.finished = true
            reject(error)
          }
        })
    },
    /**
         * 搜索列表
         */
    handleSearch() {
      this.page.current = 1
      this.finished = false
      this.getList(true)
    },
    /**
         * 获取查询参数，包含分页信息 page - 当前页码和 limit - 每页显示条数
         * @param {object} more 增加的参数
         * @param {boolean} clean 是否移除空值参数(null undefined NaN ... )，默认为 true 移除
         */
    getQuery(more, deleKeys = []) {
      let { current, size } = this.page
      let params = Object.assign({}, { current, size }, more)

      for (let i in params) {
        if (!this.$g.isNumber(params[i]) && !params[i]) {
          delete params[i]
        }
        deleKeys.includes(i) && delete params[i]
      }
      return params
    }
  }
}
