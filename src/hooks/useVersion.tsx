import useAxios from 'axios-hooks'
import { useEffect, useState } from 'react'
import { VersionConfig } from 'types/config-types'

const useVersion = () => {
  const [config, setConfig] = useState<VersionConfig>()
  const [{ data, error }] = useAxios({
    url: '/version',
    method: 'GET',
    withCredentials: false,
  })

  useEffect(() => {
    if (data && !error) {
      setConfig(data)
    }
  }, [data, error])

  return config
}

export default useVersion
