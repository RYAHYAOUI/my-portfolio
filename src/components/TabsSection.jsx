import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function TabsSection() {
  return (
    <section className="min-h-screen p-10 bg-gray-800 text-white">
      <Tabs>
        <TabList className="flex space-x-6 border-b-2 pb-2">
          <Tab className="cursor-pointer px-4 py-2 hover:bg-gray-700">About Me</Tab>
          <Tab className="cursor-pointer px-4 py-2 hover:bg-gray-700">Projects</Tab>
          <Tab className="cursor-pointer px-4 py-2 hover:bg-gray-700">Skills</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="mt-4">I'm a Mechanical Engineering student specializing in automation and robotics.</p>
        </TabPanel>

        <TabPanel>
          <h2 className="text-4xl font-bold">Projects</h2>
          <p className="mt-4">Here are some of my best engineering projects.</p>
        </TabPanel>

        <TabPanel>
          <h2 className="text-4xl font-bold">Skills</h2>
          <p className="mt-4">CAD Design | 3D Modeling | Automation | Industrial Robotics</p>
        </TabPanel>
      </Tabs>
    </section>
  );
}
