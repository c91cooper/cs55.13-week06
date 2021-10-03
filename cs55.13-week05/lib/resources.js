import firebase from "./firebase";

export async function getResourceIds(){
  let output =[];

  try{
    const snapshot = await firebase.collection("resources").get();

    snapshot.forEach(
      (doc) =>{
        output.push(
          {
            params: {
              id: doc.id
            }
          }
        );
      }
    );
  }catch(err){
    console.error(err);
  }

  return output;
}

export async function getResourceData(idRequested){
  const doc = await firebase.collection("resources").doc(idRequested).get();

  let output;
 if(!doc.empty){
    output = {id: doc.id, data: doc.data()};
  }else{
    ouput = null
  }

  return output;
}
