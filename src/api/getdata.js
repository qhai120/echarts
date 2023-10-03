import request from '@/until/request'

function getData (ur, data) {
  return request.request1({
    url: ur,
    data: {
      data
    }
  })
}

export default { getData }
