import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout, Menu, MenuProps } from "antd"
const { Header, Content } = Layout;
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const items1: MenuProps['items'] = [
    {
      key: "blogs",
      label: `文章`,
    },
    {
      key: "tags",
      label: `标签`,
    },
    {
      key: "infos",
      label: `信息`,
    }
  ]

  const menuSwitch = (menuInfo: any) => {
    console.log(menuInfo)
    router.push(menuInfo.key)
  }

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu onClick={menuSwitch} theme="dark" mode="horizontal" defaultSelectedKeys={['blogs']} items={items1} />
      </Header>
      <Layout>
        <Content>
          < Component {...pageProps} />
        </Content>
      </Layout>
    </Layout>
  )

}

export default MyApp
