import React from "react";
import features from "../../data/features";
import FeatureCard from "./FeatureCard";

function Feature() {
  return (
    <section className="px-10 mt-12">
      <div className="bg-[#faf8ff] border border-gray-100 rounded-xl flex justidy-between divide-x divide-gray-200">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Feature;
