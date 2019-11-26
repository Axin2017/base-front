//开发环境后台地址(使用.env.development等环境配置的话不用此文件,此配置主要目的是开发人员不知道会部署到哪里，如果知道的话，不建议把地址配置在这个文件里面)
window.baseUrl = 'http://172.26.40.108:8095/'

// 运维管理后台地址 使用此地址请求目录树中具体服务
window.operationBackendUrl = 'http://172.26.156.101:8000/ResourceService'

// 共享平台后台地址 使用此地址请求目录树
window.shareBackendUrl = 'http://dev.chinadci.com:38097'
