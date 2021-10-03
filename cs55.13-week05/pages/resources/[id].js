import {getResourceIds, getResourceData} from "../../lib/resources";

export async function getStaticPaths(){
  const paths = await getResourceIds();
  return{
    paths,
    fallback: false
  };
}

export async function getStaticProps({params}){
  const itemData = await getResourceData(params.id);

  return{
    props:{
      itemData
    }
  };
}

export default function Entry({ itemData }) {
  console.log(itemData);
  return (
    <article className="card col-6">
      <div className="card-body">
        <h5 className="card-title">{itemData.data.name}</h5>
        <p className="card-text">{itemData.data.faveColor}</p>
        {itemData.data.email ?
          <a className="btn btn-primary" href={itemData.data.email}>{itemData.data.email}</a>
          : null
        }
      </div>
    </article>
  );
}