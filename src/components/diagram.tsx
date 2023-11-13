import { Graphviz } from "graphviz-react"

export default function Diagram({ grafo }: { grafo: string }) {
  return (
    <Graphviz dot={grafo} />
  )
}