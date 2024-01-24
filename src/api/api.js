
import rooms from "./wedding";
import progresses from "./progresses"

export default (axios) => ({
  wedding: rooms(axios),
  progress: progresses(axios),
  
});

