const ROOT_URL = `https://api.coinmarketcap.com/v1/ticker`

export const coinApis = async (method, url, signal) => {
  try {
    // 위에서 signal은 뭔지??  - signal?: AbortController['signal']
    // 폼데이터 만들기
    // let formData = new FormData();
    // formData.append('account', this.state.account);
    // formData.append('password', this.state.password);
    // 헤더 만들기 
    //var jsonHeader = {headers:{Accept:'application/json'}};
    //var req = fetch(HOST + url, jsonHeader).then( res => res.json() );
    // 아래와 같이 넣을 경우 
    var jsonHeader = { Accept:'application/json' };

    // HTTP Method 가 여러개이기 때문에 각각 만들지... 
    const methodName = getHttpMethod(method);
    if(methodName !== 'GET' && methodName !== 'DELETE') {
        // Body를 취급하지 않는 메소드는 취급하지 않는다
        console.log("don't match HTTP method")
        return null;
    }
    var result = null;
    
    await fetch(`${ROOT_URL}` + url)
    .then(response => response.json() )
    .then(data => {
        result = data;
    })
    .catch(error => {
      console.log(error);
      throw error;
    })

    return result;
    
  } catch (err) {
    console.log('!!! err');
    console.log(err);
    throw new Error(err);
  }
};

// 일단 구현해 놓는다... 여기서 뭔가 할게 있을까??? 
getHttpMethod = (method) => {
    switch(method) {
        case 'GET': 
            return 'GET';
        case 'POST':
            return 'POST';
        case 'PATCH':
            return 'PATCH';
        case 'DELETE':
            return 'DELETE';
    }
}
