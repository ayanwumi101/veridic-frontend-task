import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import SinglePost from './SinglePost'


const Posts = ({posts}) => {
  return (
    <Box>
          <Flex flexDirection='row' flexWrap='wrap' justifyContent={{ base: 'center', md: 'space-around', lg: 'space-around' }} alignItems='start'>
            {posts.map((post) => <SinglePost post={post} key={post.id} />)}
        </Flex>
    </Box>
  )
}

export default Posts