import React from "react";
import Project from "../../templates/project";

const ProjectPostPreview = ({ entry, widgetFor }) => {
  console.log(entry, widgetFor);
  let title = entry.getIn(["data", "title"]);
  let description = entry.getIn(["data", "description"]);
  let ld = entry.getIn(["data", "ld"]);
  let link = entry.getIn(["data", "link"]);
  let bd = entry.getIn(["data", "bd"]);
  let pictures = entry.getIn(["data", "pictures"]);
  let available = entry.getIn(["data", "available"]);
  let props = {
    data: {
      markdownRemark: {
        frontmatter: { title, description, ld, link, bd, pictures, available },
      },
    },
  };

  return <Project data={props.data} />;
};

export default ProjectPostPreview;
