import { useParams } from 'react-router';

// Zod schema matching the problem schema

function ProblemUpdate() {
  
    const {problemId}  = useParams();
    console.log(problemId);
  
  return (
    <div>
        <div>Problem Updated</div>
    </div>
  );
}

export default ProblemUpdate;