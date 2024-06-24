/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";

const dd = {
  ok: true,
  data: [
    {
      createdAt: "2024-06-24T17:19:40.429Z",
      time: 60,
      elapsed: 10,
      goal: "No Goal",
      ended: false,
      work: "continuing m_aking an aesthetic weather app_",
    },
    {
      createdAt: "2024-06-24T14:13:24.155Z",
      time: 60,
      elapsed: 60,
      goal: "No Goal",
      ended: true,
      work: "Making an aesthetic weather app",
    },
    {
      createdAt: "2024-06-24T13:02:29.773Z",
      time: 60,
      elapsed: 60,
      goal: "No Goal",
      ended: true,
      work: "continue making art showcase website",
    },
    {
      createdAt: "2024-06-24T12:01:58.941Z",
      time: 60,
      elapsed: 60,
      goal: "No Goal",
      ended: true,
      work: "continue art showcase website",
    },
    {
      createdAt: "2024-06-24T09:36:59.457Z",
      time: 60,
      elapsed: 55,
      goal: "No Goal",
      ended: true,
      work: "working on google sheets stock code",
    },
    {
      createdAt: "2024-06-24T09:36:38.089Z",
      time: 60,
      elapsed: 0,
      goal: "No Goal",
      ended: true,
      work: "continue art showcase website",
    },
    {
      createdAt: "2024-06-24T09:05:33.009Z",
      time: 60,
      elapsed: 13,
      goal: "No Goal",
      ended: true,
      work: "adding text to speech to sign language app",
    },
    {
      createdAt: "2024-06-24T07:00:48.256Z",
      time: 60,
      elapsed: 60,
      goal: "No Goal",
      ended: true,
      work: "continuing sign language to speech app",
    },
    {
      createdAt: "2024-06-24T05:43:31.199Z",
      time: 60,
      elapsed: 60,
      goal: "No Goal",
      ended: true,
      work: "adding server to the leaderboard",
    },
    {
      createdAt: "2024-06-23T17:33:59.176Z",
      time: 60,
      elapsed: 60,
      goal: "No Goal",
      ended: true,
      work: "continuing sign language to speech app",
    },
    {
      createdAt: "2024-06-23T14:48:50.637Z",
      time: 60,
      elapsed: 60,
      goal: "No Goal",
      ended: true,
      work: "continuing sign language to speech website",
    },
    {
      createdAt: "2024-06-23T13:19:44.525Z",
      time: 60,
      elapsed: 60,
      goal: "No Goal",
      ended: true,
      work: "continuing sign language to speech website",
    },
    {
      createdAt: "2024-06-23T12:25:27.802Z",
      time: 60,
      elapsed: 35,
      goal: "No Goal",
      ended: true,
      work: "google sheets app script to automatically fetch stock pricing data from stockedge api",
    },
    {
      createdAt: "2024-06-23T11:14:32.066Z",
      time: 60,
      elapsed: 60,
      goal: "art-showcase-website",
      ended: true,
      work: "working on art showcase website",
    },
    {
      createdAt: "2024-06-23T09:43:40.933Z",
      time: 60,
      elapsed: 37,
      goal: "No Goal",
      ended: true,
      work: "making sign language to speech app",
    },
    {
      createdAt: "2024-06-23T00:16:28.508Z",
      time: 60,
      elapsed: 41,
      goal: "product website like apple",
      ended: true,
      work: "continuing product website like apple, working on video section",
    },
    {
      createdAt: "2024-06-22T23:09:00.449Z",
      time: 60,
      elapsed: 60,
      goal: "product website like apple",
      ended: true,
      work: "continuing on product website like apple, working on other sections",
    },
    {
      createdAt: "2024-06-22T21:59:27.253Z",
      time: 60,
      elapsed: 59,
      goal: "fashion-swiping-app",
      ended: true,
      work: "making fashion clothes swiping app",
    },
    {
      createdAt: "2024-06-22T17:46:21.091Z",
      time: 60,
      elapsed: 30,
      goal: "arcade-leaderboard",
      ended: true,
      work: "making ticket count animation from 0 to ticket in arcade leaderboard",
    },
    {
      createdAt: "2024-06-22T17:21:34.976Z",
      time: 60,
      elapsed: 23,
      goal: "arcade-leaderboard",
      ended: true,
      work: "optimizing arcade leaderboard website for more users",
    },
    {
      createdAt: "2024-06-22T16:00:04.804Z",
      time: 60,
      elapsed: 60,
      goal: "arcade-leaderboard",
      ended: true,
      work: "making arcade leaderboard",
    },
    {
      createdAt: "2024-06-22T14:52:18.816Z",
      time: 60,
      elapsed: 60,
      goal: "product website like apple",
      ended: true,
      work: "continuing  product website like apple",
    },
    {
      createdAt: "2024-06-22T11:34:06.240Z",
      time: 60,
      elapsed: 60,
      goal: "No Goal",
      ended: true,
      work: "continuing product website like apple, and working of features section",
    },
    {
      createdAt: "2024-06-22T09:19:07.166Z",
      time: 60,
      elapsed: 60,
      goal: "product website like apple",
      ended: true,
      work: "continuing product website like apple , adding features section",
    },
    {
      createdAt: "2024-06-22T07:15:53.671Z",
      time: 60,
      elapsed: 60,
      goal: "product website like apple",
      ended: true,
      work: "making product website like aplpe, continuing adding 3d modeling features",
    },
    {
      createdAt: "2024-06-22T05:52:15.021Z",
      time: 60,
      elapsed: 60,
      goal: "product website like apple",
      ended: true,
      work: "continuing coding customization features in 3d modeling",
    },
    {
      createdAt: "2024-06-21T22:23:54.982Z",
      time: 60,
      elapsed: 28,
      goal: "hackclub arcade shop",
      ended: true,
      work: "code and fix aligning issue on hackclub's arcade shop, also fix casing issue (make it camel Case)",
    },
    {
      createdAt: "2024-06-21T20:46:38.017Z",
      time: 60,
      elapsed: 60,
      goal: "No Goal",
      ended: true,
      work: "coding display convinience and navigation control for the 3d model, along with coding different lighting conditions, heights etc",
    },
    {
      createdAt: "2024-06-21T19:27:56.621Z",
      time: 60,
      elapsed: 60,
      goal: "product website like apple",
      ended: true,
      work: "continuing my product website like apple, adding 3d modelling to the product",
    },
    {
      createdAt: "2024-06-21T18:23:53.299Z",
      time: 60,
      elapsed: 60,
      goal: "product website like apple",
      ended: true,
      work: "working on product website like apple, 3d model preview section, working on code",
    },
    {
      createdAt: "2024-06-21T17:01:44.069Z",
      time: 60,
      elapsed: 54,
      goal: "hackclub arcade shop",
      ended: true,
      work: "working on hackclub's site, adding number of items in limited supply",
    },
    {
      createdAt: "2024-06-21T14:37:50.002Z",
      time: 60,
      elapsed: 60,
      goal: "cool grainy background texture website",
      ended: true,
      work: "working on adding risograph effect background in my website",
    },
    {
      createdAt: "2024-06-21T13:10:47.510Z",
      time: 60,
      elapsed: 60,
      goal: "product website like apple",
      ended: true,
      work: "continuing product website like apple, working on 3d product showcase code of website",
    },
    {
      createdAt: "2024-06-21T11:05:44.257Z",
      time: 60,
      elapsed: 60,
      goal: "product website like apple",
      ended: true,
      work: "working on product website like apple, and continuing with making home page (highlights section)",
    },
    {
      createdAt: "2024-06-21T09:27:35.927Z",
      time: 60,
      elapsed: 60,
      goal: "product website like apple",
      ended: true,
      work: "continuing with product website like apple , continuing with making home page",
    },
    {
      createdAt: "2024-06-21T07:49:06.632Z",
      time: 60,
      elapsed: 60,
      goal: "product website like apple",
      ended: true,
      work: "continuing product website like apple, continuing homepage, making product section",
    },
    {
      createdAt: "2024-06-20T19:52:25.613Z",
      time: 60,
      elapsed: 60,
      goal: "product website like apple",
      ended: true,
      work: "continue with homepage of product website like apple, continuing with product collection section in homepage",
    },
    {
      createdAt: "2024-06-20T18:52:09.289Z",
      time: 60,
      elapsed: 60,
      goal: "No Goal",
      ended: true,
      work: "continue working in product website like apple, homepage",
    },
    {
      createdAt: "2024-06-20T17:50:59.816Z",
      time: 60,
      elapsed: 60,
      goal: "product website like apple",
      ended: true,
      work: "product website like apple, continue working on homepage",
    },
    {
      createdAt: "2024-06-20T16:40:30.678Z",
      time: 60,
      elapsed: 60,
      goal: "product website like apple",
      ended: true,
      work: "continuing with product website like apple, completing navbar and making homepage",
    },
    {
      createdAt: "2024-06-20T15:10:10.062Z",
      time: 60,
      elapsed: 60,
      goal: "product website like apple",
      ended: true,
      work: "building product website (like apple), coding navbar",
    },
    {
      createdAt: "2024-06-20T12:53:19.438Z",
      time: 60,
      elapsed: 14,
      goal: "personal website",
      ended: true,
      work: "finalise and complete navbar and change stylings in navbar personal website",
    },
    {
      createdAt: "2024-06-20T11:48:10.532Z",
      time: 60,
      elapsed: 60,
      goal: "personal website",
      ended: true,
      work: "continuing with personal website",
    },
    {
      createdAt: "2024-06-20T10:12:13.550Z",
      time: 60,
      elapsed: 60,
      goal: "personal website",
      ended: true,
      work: "remaking personal website",
    },
    {
      createdAt: "2024-06-19T18:33:48.205Z",
      time: 60,
      elapsed: 60,
      goal: "pathfinding visualiser python app",
      ended: true,
      work: "continue completing path finding visuallizer and completing path finding algorithm",
    },
    {
      createdAt: "2024-06-19T17:25:14.642Z",
      time: 60,
      elapsed: 60,
      goal: "pathfinding visualiser python app",
      ended: true,
      work: "continuing with path finding visualiser, adding A* pathfinding algorithm",
    },
    {
      createdAt: "2024-06-19T15:22:04.155Z",
      time: 60,
      elapsed: 60,
      goal: "pathfinding visualiser python app",
      ended: true,
      work: "path finding visualizer project in python",
    },
    {
      createdAt: "2024-06-19T09:40:10.445Z",
      time: 60,
      elapsed: 18,
      goal: "Computer Science Club's website",
      ended: true,
      work: "fine tuning and completing school's club website",
    },
    {
      createdAt: "2024-06-19T08:26:02.053Z",
      time: 60,
      elapsed: 60,
      goal: "Computer Science Club's website",
      ended: true,
      work: "making a contact form for my school's club website",
    },
    {
      createdAt: "2024-06-19T07:14:46.183Z",
      time: 60,
      elapsed: 60,
      goal: "Computer Science Club's website",
      ended: true,
      work: "continuing school's club website and making footer",
    },
    {
      createdAt: "2024-06-18T18:55:51.900Z",
      time: 60,
      elapsed: 60,
      goal: "Computer Science Club's website",
      ended: true,
      work: "continue with homepage of school's hack club website",
    },
    {
      createdAt: "2024-06-18T17:54:19.465Z",
      time: 60,
      elapsed: 60,
      goal: "Computer Science Club's website",
      ended: true,
      work: "continuing school's hack club website, making the website more professional, adding more home page elements",
    },
    {
      createdAt: "2024-06-18T16:21:55.412Z",
      time: 60,
      elapsed: 60,
      goal: "Computer Science Club's website",
      ended: true,
      work: "continuing club website, adding homepage carousel for images of club and more",
    },
    {
      createdAt: "2024-06-18T15:20:16.981Z",
      time: 60,
      elapsed: 60,
      goal: "Computer Science Club's website",
      ended: true,
      work: "continuing School's Hackclub's website, adding navigation system, and changing navbar",
    },
    {
      createdAt: "2024-06-18T14:51:06.781Z",
      time: 60,
      elapsed: 17,
      goal: "voice activated mobile app",
      ended: true,
      work: "working on adding auto image clicking functionality in voice activated android app",
    },
    {
      createdAt: "2024-06-18T13:42:39.277Z",
      time: 60,
      elapsed: 60,
      goal: "voice activated mobile app",
      ended: true,
      work: "continue working on voice activated mobile app",
    },
    {
      createdAt: "2024-06-18T12:23:14.825Z",
      time: 60,
      elapsed: 51,
      goal: "Computer Science Club's website",
      ended: true,
      work: "Making my school’s CS Club’s website in React",
    },
    {
      createdAt: "2024-06-18T11:04:09.859Z",
      time: 60,
      elapsed: 60,
      goal: "voice activated mobile app",
      ended: true,
      work: "continue working on mobile to do stuff from voice commands",
    },
    {
      createdAt: "2024-06-18T10:02:14.316Z",
      time: 60,
      elapsed: 60,
      goal: "voice activated mobile app",
      ended: true,
      work: "making a mobile app that can do stuff from voice commands",
    },
    {
      createdAt: "2024-06-17T16:09:58.686Z",
      time: 60,
      elapsed: 60,
      goal: "No Goal",
      ended: true,
      work: "Making machine learning model to predict disruptions in Nuclear fusion reactors before they happen",
    },
    {
      createdAt: "2024-06-17T16:07:22.333Z",
      time: 60,
      elapsed: 2,
      goal: "No Goal",
      ended: true,
      work: "Making Machine Learning Model to predict disruptions in Nuclear Fusion Reactors before they actually happen!",
    },
  ],
};

import { Line } from "react-chartjs-2";
import axios from "axios";
import { format, parseISO } from "date-fns";
import { Box, Heading, Text, Container } from "theme-ui";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SessionHistory = () => {
  const [sessions, setSessions] = useState(dd.data);

  useEffect(() => {
    axios
      .get("http://hackhour.hackclub.com/api/history/U079CQWJLCQ")
      .then((response) => {
        if (response.data.ok) {
          setSessions(response.data.data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const groupSessionsByDate = (sessions) => {
    return sessions.reduce((acc, session) => {
      const date = format(parseISO(session.createdAt), "yyyy-MM-dd");
      if (!acc[date]) {
        acc[date] = { totalElapsed: 0, count: 0 };
      }
      acc[date].totalElapsed += session.elapsed;
      acc[date].count += 1;
      return acc;
    }, {});
  };

  const groupedSessions = groupSessionsByDate(sessions);
  const dates = Object.keys(groupedSessions).sort();
  const elapsedTimesInHours = dates.map((date) =>
    (groupedSessions[date].totalElapsed / 60).toFixed(2)
  );

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Total Elapsed Time (hours)",
        data: elapsedTimesInHours,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <Container sx={{ p: 4 }}>
      <Heading as="h1" sx={{ mb: 4, fontFamily: "Arcade" }}>
        Hours each day
      </Heading>
      <Line data={data} />
    </Container>
  );
};

export default SessionHistory;
