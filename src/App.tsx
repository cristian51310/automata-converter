import { Card, CardContent } from "@/components/ui/card";
import Diagram from "./components/diagram";
import Tabla from "./components/tables/table";
import AutomataForm from "./form";
import useDataStore from "./store/useDataStore";

export default function App() {
  const { grafoOriginal, grafoResultante, transitions, alphabet, resumeTransitions } = useDataStore()



  return (
    <main className="p-12 py-8">
      <div className="grid gap-10 grid-cols-12">
        <Card className="col-span-5">
          <CardContent>
            <p className="text-xl font-bold mt-7 mb-5">Datos de tu AFN</p>
            <AutomataForm />
          </CardContent>
        </Card>

        <Card className="col-span-7">
          <CardContent>
            <p className="text-xl font-bold mt-7">Grafo Inicial (AFN)</p>
            <Card className="mt-5 flex flex-col gap-6 justify-center items-center p-4">
              <Diagram grafo={grafoOriginal} />
            </Card>

            <p className="text-xl font-bold mt-7">Tabla de transiciones</p>
            <Card className="mt-5 flex flex-col gap-6 justify-center items-center p-4">
              <Tabla transitions={transitions} alphabet={alphabet} />
            </Card>

            <p className="text-xl font-bold mt-7">Tabla resumida</p>
            <Card className="mt-5 flex flex-col gap-6 justify-center items-center p-4">
              {resumeTransitions && (
                <Tabla transitions={resumeTransitions} alphabet={alphabet} />
              )}
            </Card>

            <p className="text-xl font-bold mt-7">Grafo Resultante (AFD)</p>
            <Card className="mt-5 flex flex-col gap-6 justify-center items-center p-4">
              <Diagram grafo={grafoResultante} />
            </Card>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}