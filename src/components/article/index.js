import React, { useEffect, useState } from "react"
import axios from 'axios'
import { DATAFORMAT } from './constants'
import './styles.scss'

const Article = ({
  srcType,
  dataSrc
}) => {

  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [isError, setError] = useState(false)

  useEffect(() => {
    if (srcType === DATAFORMAT.API) {
      const fetchData = async () => {
        try {
          const result = await axios(dataSrc);
          setData(result.data);
          setLoading(false)
        } catch (error) {
          setError(true)
        }
      }
      fetchData();
    } else {
      setData(dataSrc);
      setLoading(false)
    }
  }, []);

  const buildArticles = (responseData, sourceFormat) => {
    if (sourceFormat === DATAFORMAT.API) {
      return (
        <ul className="articles">
          {
            responseData.map(article => (
              <li key={article.numericCode}>
                <article>
                  <h2>{article.name}</h2>
                  <p>Capital: {article.capital}</p>
                  <p>Population: {article.population}</p>
                  <p>
                    <img src={article.flag} />
                  </p>
                </article>
              </li>
              )
            )
          }
        </ul>
      )
    } else if (source === DATAFORMAT.JSON) {
      return (
        <ul className="articles">
          {
            responseData.map(article => (
              <li key={article.id}>
                <article>
                  <h2>{article.heading}</h2>
                  <p>{article.content}</p>
                  <p>
                    <img src={article.image}/>
                  </p>
                  <a href="">link</a>
                </article>
              </li>
              )
            )
          }
        </ul>
      )
    } else {
      return (
        <div>No data provided</div>
      )
    }
  }

  return (
    <div className="articles">
    {isLoading ? ( <div>Page is loading......</div> ) :
      (
        buildArticles(data, srcType)
      )}
      {isError && (
        <div>There was an issue receiving the data from the API</div>
      )
      }
    </div>
  )
}

export default Article