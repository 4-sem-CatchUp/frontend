import React from "react";
import DefaultButton from "../../../components/ui/DefaultButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMedal, faCircle, faGear, faComments } from "@fortawesome/free-solid-svg-icons";
import Card from "../../../components/ui/Card";

export default function ProfileHeader() {
  return (
    <Card title="Username" icon={<FontAwesomeIcon icon={faCircle} size="xs" />}>
      <section className="grid grid-cols-1 md:grid-cols-6 gap-6 relative overflow-hidden dark:bg-gray-900 bg-stone-50 p-2">
        <div
          className="md:col-span-1 space-y-6 h-32 w-32 flex items-center justify-center 
                          rounded-xl bg-gray-200 dark:bg-gray-800 
                          text-gray-500 dark:text-gray-400"
        >
          <FontAwesomeIcon icon={faUser} size="5x" />
        </div>
        <div className="md:col-span-4 space-y-6">
          <p className="mt-2 text-sm text-gray-900 dark:text-stone-50">
            Quick bio section that the user can change
          </p>
        </div>
        <div className="md:col-span-1 space-y-3">
          <h1 className="text-xl md:text-2xl font-semibold">
            Rank 32
            <FontAwesomeIcon
              icon={faMedal}
              className="inline-block ml-1 text-yellow-500"
            />
          </h1>
          <DefaultButton text="Edit Profile" icon={<FontAwesomeIcon icon={faGear} size="xs"/>} />
          <DefaultButton text="Message" icon={<FontAwesomeIcon icon={faComments} size="xs"/>} />
        </div>
      </section>
    </Card>
  );
}
