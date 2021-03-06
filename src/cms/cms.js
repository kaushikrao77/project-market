import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

// import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ProjectPostPreview from "./preview-templates/ProjectPostPreview.js";
// import ProductPagePreview from "./preview-templates/ProductPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

// CMS.registerPreviewTemplate('index', IndexPagePreview)
// CMS.registerPreviewTemplate("about", AboutPagePreview);
// CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("project", ProjectPostPreview);
