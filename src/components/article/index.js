import React, { useEffect, useState } from "react";
import axios from 'axios';

const JSONData = [
  {
    id: 1,
    content: 'fasdfas safdsafdsadfsad',
    link: {
      href: 'sadfsadfsadfsda',
      label: 'dsaslkdfl',
      alt: 'sdafasd fasdfsadfsa dfsadsd'
    }
  },
  {
    id: 2,
    content: 'fasdfas safdsafdsadfsad',
    link: {
      href: 'sadfsadfsadfsda',
      label: 'dsaslkdfl',
      alt: 'sdafasd fasdfsadfsa dfsadsd'
    }
  },
  {
    id: 3,
    content: 'fasdfas safdsafdsadfsad',
    link: {
      href: 'sadfsadfsadfsda',
      label: 'dsaslkdfl',
      alt: 'sdafasd fasdfsadfsa dfsadsd'
    }
  }
]


const Article = ({
  srcType,
  dataSrc
}) => {

  const [status, setStatus] = useState('loading')
  const [dataPath, displayData] = useState({});

  // useEffect(async () => {
  //   const result = await axios(
  //     dataSrc,
  //   );
  //   setStatus('loaded')
  //   displayData(result.data);
  //   console.log(dataPath)
  // });


  useEffect(() => {
    setStatus('loaded')
    axios.get(dataSrc)
    .then(function (response) {
      displayData(response.data)
      console.log('displayData', displayData)
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);


  // const callData = (type, data) => {
  //   if (type === "API") {
  //     axios.get(data)
  //       .then(function (response) {
  //         console.log(response.data);
  //         buildArticles(response.data)
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   } else if (type === "JSON") {
  //     buildArticles(data)
  //   } else {
  //     return (
  //       <div>No data source</div>
  //     )
  //   }
  // }

  const buildArticles = (responseData) => {
    console.log('buildArticles called', responseData)
    return (
      responseData.map(article => (
        <li>
          <article>
            <div>
              <h2>{article.name}</h2>
              <p>Capital: {article.capital}</p>
              <p>Population: {article.population}</p>
              <p>
                <img src={article.flag} />
              </p>
            </div>
            <a href="">link</a>
          </article>
        </li>
        )
      )
    )
  }

  return (
    <ul className="articles">
      {status === 'loading' ? 'content is loading' : 'loaded'
      }

      {/* {callData(srcType, dataSrc)} */}
    </ul>
  )
}

export default Article