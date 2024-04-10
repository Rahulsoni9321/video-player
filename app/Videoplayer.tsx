interface Videoplayertype {
  toggleplaypause: () => void;
  ispaused: boolean;
  size: number;
  progress: number;
  width: number;
}
export function Videoplayer({
  toggleplaypause,
  ispaused,
  size,
  progress,
  width,
}: Videoplayertype) {
  const center = size / 2;
  const radius = center - 8;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);

  return (
    <div className=" flex justify-center items-center relative gap-8">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#000000"
          strokeWidth={width}
        ></circle>
        
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#ffffff"
          strokeWidth={width}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        ></circle>
      </svg>
      <div className="fill-white  absolute flex justify-center items-center">
        <button className="hover:fill-slate-400" onClick={toggleplaypause}>
          {ispaused ? <PlayButton></PlayButton> : <PauseButton></PauseButton>}
        </button>
      </div>
    </div>
  );
}

function PlayButton() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_608_6)">
        <path
          d="M2.13275 16.0002C2.51033 16.0002 2.83127 15.8492 3.20886 15.6321L14.2154 9.2698C14.9988 8.80726 15.2726 8.5052 15.2726 8.0049C15.2726 7.5046 14.9988 7.20254 14.2154 6.74944L3.20886 0.377746C2.83127 0.160637 2.51033 0.019043 2.13275 0.019043C1.43422 0.019043 1 0.547657 1 1.3689V14.6409C1 15.4621 1.43422 16.0002 2.13275 16.0002Z"
          fill-opacity="0.85"
        />
      </g>
      <defs>
        <clipPath id="clip0_608_6">
          <rect width="14.2726" height="16" transform="translate(1)" />
        </clipPath>
      </defs>
    </svg>
  );
}
function PauseButton() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_608_6)">
        <path
          d="M3.29883 15.9082H5.52539C6.375 15.9082 6.82422 15.459 6.82422 14.5996V1.29883C6.82422 0.410156 6.375 0 5.52539 0H3.29883C2.44922 0 2 0.449219 2 1.29883V14.5996C2 15.459 2.44922 15.9082 3.29883 15.9082ZM10.3984 15.9082H12.6152C13.4746 15.9082 13.9141 15.459 13.9141 14.5996V1.29883C13.9141 0.410156 13.4746 0 12.6152 0H10.3984C9.53906 0 9.08984 0.449219 9.08984 1.29883V14.5996C9.08984 15.459 9.53906 15.9082 10.3984 15.9082Z"
          fill-opacity="0.85"
        />
      </g>
      <defs>
        <clipPath id="clip0_608_6">
          <rect width="11.9141" height="15.9082" transform="translate(2)" />
        </clipPath>
      </defs>
    </svg>
  );
}
