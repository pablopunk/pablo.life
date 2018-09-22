import md from 'markdown-in-js'
import Post from '../../components/post'

import mdElements from '../../components/post/mdElements'

const Content = () => md(mdElements)`

# Work from home as a web developer

![image](https://file-wxwghwevsf.now.sh)

I was interviewed by **keepcoding.io** about how I
got a remote job as a web developer.

The interview is in Spanish, you can [read it here](https://keepcoding.io/es/blog/trabaja-desarrollador-web-desde-casa/)
`

export default () => (
  <Post title='Work from home as a web developer'>
    <Content />
  </Post>
)
