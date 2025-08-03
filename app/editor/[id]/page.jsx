"use client";
import { useParams } from 'next/navigation'
import React from 'react'

const Editor = () => {
    const params = useParams();
    const projectId = params.id;

  return (
    <div>
      Editor: {projectId}
    </div>
  )
}

export default Editor
