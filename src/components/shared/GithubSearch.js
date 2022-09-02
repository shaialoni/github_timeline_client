// github search user component here
import { Input, Button } from '@chakra-ui/react'

const GitHubSearch = () => {

return(
    <>
    <Input placeholder='Search Github' style={{marginTop: '30px', marginLeft: '20%', marginRight:'5px', width: '50%'}} />
    <Button size='sm' colorScheme='linkedin'>Submit</Button>
    </>
)
}

export default GitHubSearch;