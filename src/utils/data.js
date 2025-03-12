const mockData = [
  {
    id: "1",
    date: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0],
    content: " content1",
    emotionId: 1
  },
  {
    id: "2",
    date: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString().split('T')[0],
    content: " content2",
    emotionId: 2
  },
  {
    id: "3",
    date: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString().split('T')[0],
    content: " content3",
    emotionId: 3
  },
  {
    id: "4",
    date: new Date(new Date().setDate(new Date().getDate() - 4)).toISOString().split('T')[0],
    content: " content4",
    emotionId: 4
  },
  {
    id: "5",
    date: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString().split('T')[0],
    content: " content5",
    emotionId: 5
  },
];

export default mockData;
