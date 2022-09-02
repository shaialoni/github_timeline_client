// github search user component here
import { useState } from 'react'
import { Input, Button } from '@chakra-ui/react'
import axios from 'axios'
console.log('suhhhhhhhhhhhh')

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
    const [username, setUsername] = useState(null)

    const githubSearch = () => {
        console.log('username', username)
        axios.get(`https://api.github.com/users/${username}/repos`, {
            'headers': {
                'Authorization': `token ${process.env.REACT_APP_KEY}` 
                } 
        })
            .then(res => {
                console.log('RESPONSE', res.data)
            })
            .catch(err => console.log(err))
    }

    return (
      <>
        

        <Input 
                placeholder='Search Github' 
                style={{
                    marginTop: '30px', 
                    marginLeft: '20%', 
                    marginRight:'5px', 
                    width: '50%'}} 
                onChange={(e)=> setUsername(e.target.value)}
            />
            <Button 
                size='sm' 
                colorScheme='linkedin'
                onClick={githubSearch}
            >
                Submit
            </Button>
      </>
    );
}

export default GitHubSearch;