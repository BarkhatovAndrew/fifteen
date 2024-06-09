import { Footer } from '@/components/footer'
import { Game } from '@/components/game'
import { Header } from '@/components/header'
import { Layout } from '@/components/ui/layout'

export const App = () => {
  return (
    <Layout>
      <Header />
      <Game />
      <Footer />
    </Layout>
  )
}
