type GraphNode = {
  data: {
    id: string;
    label: string;
    color: string;
  },
  position: {
    x: number;
    y: number;
  }
}

type GraphEdge = {
  data: {
    source: string;
    target: string;
    label: string;
  }
}

export type {
  GraphEdge, GraphNode
}
