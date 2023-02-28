import { Box, Text, Image, Heading, Card, CardHeader, CardBody, CardFooter, Stack, Divider, ButtonGroup, Button, Flex, Link } from '@chakra-ui/react'
import React from 'react'

const SinglePost = ({post}) => {
    const { date, link, excerpt, jetpack_featured_media_url, title, _links } = post;
    const newDate = new Date(date).toDateString();
  return (
    <Link href={link} isExternal _hover={{textDecoration: 'none'}}>
    <Box>
        <Flex>
          <Card maxW='sm' mb='5' _hover={{boxShadow: 'lg',}}>
              <CardBody>
                  <Image
                      src={jetpack_featured_media_url}
                      alt={title}
                      borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                      <Heading size='md'>{title.rendered}</Heading>
                      <Text dangerouslySetInnerHTML={{ __html: excerpt.rendered}}>
                      </Text>
                      
                      <Text color='blue.600' fontSize='lg'>
                          Date: {newDate}
                      </Text>
                  </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                  <ButtonGroup spacing='2'>
                      <Button variant='solid' colorScheme='blue'>
                          Read More
                      </Button>
                  </ButtonGroup>
              </CardFooter>
          </Card>
        </Flex>
    </Box>
    </Link>
  )
}

export default SinglePost