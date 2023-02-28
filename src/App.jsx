import { Box, Text, useToast, Heading, Spinner } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Posts from './components/Posts'

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([])
  const toast = useToast()
  const [loading, setLoading] = useState(true)

  const api_url = 'https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed';
  const fetchData = async() => {
    try {
      const response = await axios.get(api_url);
      const data = response.data;
      console.log(data);
      setPosts(data)
      setLoading(false)
    } catch (error) {
      const message = error.response.data.message;
      toast({
        title: 'Error!',
        description: message,
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top',
        variant: 'left-accent'
      })
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <Box className="App">
      <Heading my='5' textAlign={'center'}>Posts</Heading>
      {loading 
                ? <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='xl'
                  ml='50%'
                  mt='15%'
                />
                : 
                <Posts 
                posts={posts} 
                />}
    </Box>
  )
}

export default App
