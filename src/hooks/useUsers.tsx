import { AxiosRequestConfig } from 'axios'
import useAxios from 'axios-hooks'
import { ServerConfigContainer } from 'containers/ConfigContainer'
import { useMyAxios } from 'hooks/useMyAxios'

const useUsers = () => {
  const { authEnabled } = ServerConfigContainer.useContainer()
  const { axiosManualOptions } = useMyAxios()
  const [, execute] = useAxios({}, axiosManualOptions)

  const getUsers = () => {
    const config: AxiosRequestConfig = {
      url: '/api/v1/users',
      method: 'get',
      withCredentials: authEnabled,
    }

    return execute(config)
  }

  const getUser = (name: string) => {
    const config: AxiosRequestConfig = {
      url: `/api/v1/users/${name}`,
      method: 'get',
      withCredentials: authEnabled,
    }

    return execute(config)
  }

  const createUser = (name: string, pw: string) => {
    const config: AxiosRequestConfig = {
      url: '/api/v1/users',
      method: 'post',
      withCredentials: authEnabled,
      data: {
        username: name,
        password: pw,
      },
    }

    return execute(config)
  }

  return { getUsers, getUser, createUser }
}

export default useUsers
