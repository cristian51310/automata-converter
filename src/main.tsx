import ReactDOM from 'react-dom/client'
import { Toaster } from "sonner"
import App from './App.tsx'
import Navbar from './components/navbar.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Toaster richColors position='top-right' />
    <Navbar />
    <App />
  </ThemeProvider>
)
