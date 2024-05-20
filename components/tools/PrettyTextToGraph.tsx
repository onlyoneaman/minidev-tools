import React, {useState} from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {GraphEdge, GraphNode} from "@/types/llmGraph";
import {PROMPTS} from "@/utils/prompts";
import {ResizableHandle} from "@/components/ui/resizable";
import {Panel, PanelGroup} from "react-resizable-panels";

const colors = [
  "#FFB3BA",
  "#FFDFBA",
  "#FFFFBA",
  "#BAFFC9",
  "#BAE1FF",
];

let colorIndex = 0;

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

const PrettyTextToGraph = () => {
  const [text, setText] = useState('');
  const [elements, setElements] = useState([]);
  const [loading, setLoading] = useState(false);

  const createGraph = async () => {
    if (loading) {
      toast.error("Please wait for the current graph to finish generating");
      return;
    }
    handleInput();
  }

  const handleInput = async () => {
    if (!text) {
      toast.error("Please enter some text to generate a graph");
      return;
    }
    setLoading(true);
    try {
      if (!apiKey) throw new Error("API key not found");
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash-latest",
        systemInstruction: PROMPTS.SYSTEM_PROMPTS.PRETTY_TEXT_TO_GRAPH,
      });
      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
      };
      const chatSession = model.startChat({
        generationConfig,
        safetySettings,
        history: [],
      });
      const result = await chatSession.sendMessage(text);
      const resultText = result.response.text();
      const resultJson = JSON.parse(resultText);
      let elements: (GraphEdge | GraphNode)[] = [];
      resultJson.nodes.map((node: GraphNode) => {
        elements.push({
          data: {
            id: node.id || node.label,
            label: node.label,
            color: colors[colorIndex % colors.length],
          },
          position: {
            x: Math.random() * 1000,
            y: Math.random() * 1000,
          }
        });
        colorIndex++;
      });
      resultJson.edges.map((edge: GraphEdge) => {
        elements.push({
          data: {
            source: edge.source,
            target: edge.target,
            label: edge.label,
            color: colors[colorIndex % colors.length],
          }
        });
      });
      console.log('Graph data:', elements);
      setElements(elements);
    } catch (error) {
      console.error('Error fetching graph data:', error);
    }
    setLoading(false);
  };

  return (
    <PanelGroup
      className="min-w-full min-h-[600px]"
      direction="horizontal"
    >
      <Panel
        defaultSize={30}
      >
        <div
          className="flex flex-col gap-3 p-3"
        >
          <Textarea
            value={text}
            onChange={e => setText(e.currentTarget.value)}
            className="w-full h-1/2 p-2"
            rows={6}
          />

          <Button
            onClick={() => createGraph()}
          >
            {loading ? "Creating..." : "Create Graph"}
          </Button>
        </div>

      </Panel>

      <ResizableHandle withHandle/>

      <Panel>
        <div
          className="flex flex-col gap-3"
          id="cy"
        >
          <CytoscapeComponent
            className="bg-gray-100 rounded-md w-full h-full min-w-[300px] min-h-[580px]"
            elements={elements}
            stylesheet={[
              {
                selector: 'node',
                style: {
                  'background-color': 'data(color)',
                  'label': 'data(label)',
                  'color': '#000',
                },
              },
              {
                selector: 'edge',
                style: {
                  'line-color': 'data(color)',
                  'target-arrow-color': 'data(color)',
                  'curve-style': 'bezier',
                  'target-arrow-shape': 'triangle',
                  'label': 'data(label)',
                },
              },
            ]}
            layout={{
              name: "random",
            }}
          />
        </div>
      </Panel>

    </PanelGroup>
  );
}

export default PrettyTextToGraph;
