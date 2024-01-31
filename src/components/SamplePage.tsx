import * as React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react'
import {
  PageSection,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
} from '@patternfly/react-core'

export default function SamplePage() {
  const [quotes, setQuotes] = useState('')
  useEffect(() => {
    const fnQuotes =  () => {
         axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
  .then(response => {
      let issuesList = response.data;
      console.log(issuesList[0]);
      setQuotes(issuesList[0])
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  });
    }
    fnQuotes();
  }, []);

  return (
    <>
      <PageSection variant='light'>
        <Card style={{ background: '#d2d2d2', width: '50%'}} isCompact>
            <CardHeader>
              <CardTitle component="h4"><b>Quote: </b></CardTitle>
            </CardHeader>
              <CardBody ><b>{quotes} </b>
              </CardBody>
          </Card>
      </PageSection>
    </>
  )
}


