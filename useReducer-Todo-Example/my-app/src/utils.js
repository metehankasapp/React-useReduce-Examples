export async function login({ username, password }) {
  return new Promise((resolve, reject) => {
      setTimeout(()=>{
          if(username ==='metehan' && password === '159753'){
              resolve();
          }else{
              reject();
          }
      },1000)
  });
}
