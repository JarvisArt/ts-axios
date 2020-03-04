import { AxiosRequestConfig, AxiosStatic } from './types'
import Axios from './code/Axios'
import { extend } from './helpers/util'
import defaults from './defaults'
import mergeConfig from './code/mergeConfig'

function createInstance(config: AxiosRequestConfig): AxiosStatic {
  const context = new Axios(config)
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosStatic
}

const axios = createInstance(defaults)

axios.create = function create(config) {
  return createInstance(mergeConfig(defaults, config))
}

export default axios