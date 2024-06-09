import { Footer } from '@/components/footer'
import { Game } from '@/components/game'
import { Header } from '@/components/header'
import { Layout } from '@/components/ui/layout'
import { ModalSlot } from '@/components/ui/modal'

export const App = () => {
  return <Layout header={<Header />} content={<Game />} footer={<Footer />} modal={<ModalSlot />} />
}
