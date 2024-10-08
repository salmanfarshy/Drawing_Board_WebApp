import apiRequest from "./apiRequest";

const clearDrawing = async ({elements, title, id, setElements, setIsLoading}) => {
  setIsLoading(true);
  setElements([
      {
        lines: [],
      },
      {
        shapes: [],
      },
      {
        texts: [],
      },
   ])

  await apiRequest.patch("/update-drawing", {
      elements,
      title,
      id,
    });
  setIsLoading(false);
};

export default clearDrawing;
