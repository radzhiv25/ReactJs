import React from 'react'
import{
  Body,
  Html,
  Container,
  Tailwind,
  Text,
  Button,
  Img,
  Heading,
  Head
} from '@react-email/components'

const Email = () => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-12 mx-auto font-sans">
          <Container className=' text-center p-5 rounded-lg shadow-lg'>
            <Img className='mx-uto rounded-full' src='https://cdn.dribbble.com/users/1338391/screenshots/15264109/media/1febee74f57d7d08520ddf66c1ff4c18.jpg?compress=1&resize=100x100'></Img>
            <Heading className='text-xl pt-4'>Hello 👋, This is Rajeev</Heading>
            <Text className='text-lg font-semibold text-gray-400'>Hey 🚀, This is Rajeev Krishna a passionate Frontend Developer from Indore and pre-final Student. I am actively looking for Internship 💻.
            </Text>
            <Button className='p-3 bg-blue-400 border-none rounded-md text-white font-semibold' href = "https://github.com/radzhiv25">Checkout my Github</Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default Email