import { useEffect, useState } from "react";
import useSound from "use-sound";
import qala from "C:\Users\yodog\Music\Chase Atlantic - Consume feat. Goon Des Garcons (Official Audio).mp3";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipeNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";

const [isPlaying, setIsPlaying ] = useState(false);
const [play, {pause}]