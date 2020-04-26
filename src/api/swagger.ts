export default {
    /* -------- 位置相关 Location Controller -------- */
    listLocationUsingGet: { // 列出地区
        method: 'get',
        url: `/api/v1/location/list-location` 
    }, 
    listParentUsingGet: { // 获取上级
        method: 'get',
        url: `/api/v1/location/list-parent` 
    }, 

    /* -------- 商品相关 Item Controller -------- */
    itemDetailUsingGet: { // 列出商品详细
        method: 'get',
        url: `/api/v1/items/item-detail` 
    }, 
    listSizeUsingGet: { // 列出大小
        method: 'get',
        url: `/api/v1/items/list-size` 
    }, 
    listTypeUsingGet: { // 列出品类
        method: 'get',
        url: `/api/v1/items/list-type` 
    }, 
    queryItemDetailUsingGet: { // 查询商品的详细
        method: 'get',
        url: `/api/v1/items/query-detail` 
    }, 
    itemTypeDetailUsingGet: { // 列出某一类商品的详细
        method: 'get',
        url: `/api/v1/items/type-detail` 
    }, 

    /* -------- 库存数据相关 Data Stock Controller -------- */
    outUsingGet_1: { // 测试
        method: 'get',
        url: `/api/v1/stock-data/test` 
    }, 

    /* -------- 库存相关 Stock Controller -------- */
    inUsingPost: { // 入库
        method: 'post',
        url: `/api/v1/stocks/in` 
    }, 
    outUsingPost: { // 出库
        method: 'post',
        url: `/api/v1/stocks/out` 
    }, 
    queryStockUsingGet: { // 库存查询
        method: 'get',
        url: `/api/v1/stocks/query` 
    }, 
    getStoreStockUsingPost: { // 店铺库存
        method: 'post',
        url: `/api/v1/stocks/store` 
    }, 

    /* -------- 店铺相关 Store Controller -------- */
    addStoreUsingPost: { // 添加店铺
        method: 'post',
        url: `/api/v1/store/add-store` 
    }, 
    delStoreUsingGet: { // 删除店铺
        method: 'get',
        url: `/api/v1/store/del-store` 
    }, 
    listStoresUsingPost: { // 列出区县的所有店铺
        method: 'post',
        url: `/api/v1/store/list-stores` 
    }, 
    listStoresByAreaUsingPost: { // 列出大区的所有店铺
        method: 'post',
        url: `/api/v1/store/list-stores-by-area` 
    }, 
    listStoresByCityUsingPost: { // 列出城市的所有店铺
        method: 'post',
        url: `/api/v1/store/list-stores-by-city` 
    }, 
    listStoresByDistUsingPost: { // 列出区县的所有店铺
        method: 'post',
        url: `/api/v1/store/list-stores-by-district` 
    }, 
    listStoresByProvUsingPost: { // 列出省份的所有店铺
        method: 'post',
        url: `/api/v1/store/list-stores-by-prov` 
    }, 
    searchStoresUsingPost: { // 搜索店铺
        method: 'post',
        url: `/api/v1/store/search-stores` 
    }, 
    updStoreUsingPost: { // 更新店铺
        method: 'post',
        url: `/api/v1/store/update-store` 
    }, 

    /* -------- 销售数据相关 Data Sale Controller -------- */
    outUsingGet: { // 测试
        method: 'get',
        url: `/api/v1/sale-data/test` 
    }, 

    /* -------- 销售相关 Sale Controller -------- */
    returnGoodUsingPost: { // 退货
        method: 'post',
        url: `/api/v1/sales/return` 
    }, 
    saleUsingPost: { // 购买
        method: 'post',
        url: `/api/v1/sales/sale` 
    }, 

}