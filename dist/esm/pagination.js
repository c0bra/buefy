import './chunk-1fafdf15.js'
import './helpers.js'
import './chunk-953eb524.js'
import './chunk-02fb32df.js'
import { r as registerComponent, u as use } from './chunk-cca88db8.js'
import { P as Pagination, a as PaginationButton } from './chunk-eb9bc105.js'
export { P as BPagination, a as BPaginationButton } from './chunk-eb9bc105.js'

var Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Pagination)
        registerComponent(Vue, PaginationButton)
    }
}
use(Plugin)

export default Plugin
