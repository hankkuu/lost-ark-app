const ROOT_URL = 'http://localhost:3000/api';

export const homeApis = async (method, body, signal) => {
  try {
    // 위에서 signal은 뭔지?? fetch에 의한 로딩 중에 강제 중단을 시킬경우 호출을 중단시킬 수 있다 
    // ex) var controller = new AbortController 
    //     param signal = controller.signal
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    // https://developer.mozilla.org/en-US/docs/Web/API/AbortController
    
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
    if(methodName !== 'POST' && methodName !== 'PATCH') {
        return null;
    }
    
    let res = await fetch(`${ROOT_URL}/sample`, {
      signal,
      method: methodName,
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
      //body: formData
    });

    if (res) {
      res = JSON.parse(res._bodyInit);
      return res;
    }

    return null;

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
