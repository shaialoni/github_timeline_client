import { Input, Button } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'
const GitHubSearch = () => {
    console.log(process.env)
    const [query, setQuery] = useState(null)

    const gitHubSearch = () => {
        console.log(process.env.REACT_APP_KEY)
        axios.get(`https://api.github.com/users/${query}`, {
            'headers': {
                'Authorization': `token ${process.env.REACT_APP_KEY}` 
              }
        })
        .then(res => {
            console.log('RESPONSE', res.data)
            console.log('')
            console.log('name: ', res.data.name)
        })
    
    }
    const handleChange = (e) => {
        setQuery(e.target.value)
      };

return(
    <>
    <Input onChange={handleChange} placeholder='Search Github' style={{marginTop: '30px', marginLeft: '20%', marginRight:'5px', width: '50%'}} />
    <Button onClick={gitHubSearch} size='sm' colorScheme='linkedin'>Submit</Button>
    </>
)
}

export default GitHubSearch;