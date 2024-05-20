type GraphNode = {
  id: string;
  label: string;
}

type GraphEdge = {
  source: string;
  target: string;
  label: string;
}

export type {
  GraphEdge, GraphNode
}
