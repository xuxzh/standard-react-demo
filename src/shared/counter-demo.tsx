const CounterDemo = (props: {
  count: number;
  increase: () => void;
  decrease: () => void;
}) => {
  const { count, increase, decrease } = props;
  return (
    <div className="tw-flex">
      <div
        className="hover:tw-cursor-pointer tw-select-none"
        onClick={decrease}
      >
        -
      </div>
      <div className="tw-bg-green-400 tw-pointer-events-none tw-mx-4">
        {count}
      </div>
      <div
        className="hover:tw-cursor-pointer tw-select-none"
        onClick={increase}
      >
        +
      </div>
    </div>
  );
};

export default CounterDemo;
