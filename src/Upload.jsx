import './Upload.css'


function Upload() {
    return (
        <>
            <section id="projects">
                <h2>Upload New Project</h2>

                <div class="projects-container" style="grid-template-columns: 1fr; max-width: 800px; margin: 0 auto;">
                    <div class="project-card">
                        <div class="project-content">
                            <form id="uploadForm" class="upload-form" novalidate>
                                <div class="field">
                                    <label for="projectTitle">Project Name</label>
                                    <input type="text" id="projectTitle" name="projectTitle" required
                                        placeholder="Enter the name of your project" />
                                </div>

                                <div class="field">
                                    <label for="projectLongDesc">Full Description</label>
                                    <textarea id="projectLongDesc" name="projectLongDesc" rows="6" required
                                            placeholder="Enter a detailed description of your project"></textarea>
                                </div>

                                <div class="field">
                                    <label for="projectShortDesc">Short Description</label>
                                    <textarea id="projectShortDesc" name="projectShortDesc" rows="3" required
                                            placeholder="Enter a brief summary shown on the project cards"></textarea>
                                </div>

                                <div class="field">
                                    <label>Project Images</label>
                                    <div id="imageFields">
                                        <div class="image-field" data-image-field>
                                            <div class="image-field-header">
                                                <h4>Image 1</h4>
                                                <button type="button" class="remove-image-btn" title="Remove image">
                                                    <i class="fa fa-trash"></i>
                                                </button>
                                            </div>
                                            <div class="field">
                                                <label>Image File</label>
                                                <input type="file" class="imageFile" accept="image/*" required />
                                            </div>
                                            <div class="field">
                                                <label>Image Title (shown in the image popup)</label>
                                                <input type="text" class="imageTitle" required
                                                    placeholder="e.g. Home page of the website" />
                                            </div>
                                            <div class="field">
                                                <label>Image Description (shown in the image popup)</label>
                                                <textarea class="imageDesc" rows="2" required
                                                            placeholder="e.g. A responsive home page built with HTML, CSS and JavaScript."></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button type="button" id="addImageBtn" class="add-image-btn">
                                    <i class="fa fa-plus"></i> Add Another Image
                                </button>

                                <div class="form-actions">
                                    <button type="submit" class="upload-submit-btn">
                                        <i class="fa fa-upload"></i> Upload Project
                                    </button>
                                </div>

                                <div id="formMessage" class="form-message"></div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="upload-links">
                    <a href="project.html" class="btn">My Projects</a>
                    <a href="portfolio.html" class="btn">About Me</a>
                </div>
            </section>
        </>

    );
}