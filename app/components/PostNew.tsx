import React from "react";

const PostNew = () => {
  return (
    <>
      <div className="border rounded mb-3">
        <form id="comment" className="comment-area-box w-full flex flex-col ">
          <textarea
            id="comment1"
            rows={3}
            className="p-2"
            placeholder="Write something...."
          ></textarea>
          <div className="p-2 flex bg-slate-200">
            <div className="flex flex-1 items-center gap-9 mx-6">
              <a href="#" className="hover:bg-slate-200">
                <i className="mdi mdi-account-circle"></i>a
              </a>
              <a href="#" className="hover:bg-slate-200">
                <i className="mdi mdi-map-marker"></i>b
              </a>
              <a href="#" className="hover:bg-slate-200">
                <i className="mdi mdi-camera"></i>c
              </a>
              <a href="#" className="hover:bg-slate-200">
                <i className="mdi mdi-emoticon-outline"></i>d
              </a>
            </div>
            <button
              type="submit"
              className="text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostNew;
