import useTime from '../useTime';

function Clock() {
  const currentTime = useTime();

  return (
    <div>
      <p>{currentTime.toLocaleTimeString([], {hour12:true})}</p>
    </div>
  );
}

export default Clock;


