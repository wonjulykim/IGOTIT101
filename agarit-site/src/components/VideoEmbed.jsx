import './VideoEmbed.css'

export default function VideoEmbed({ youtubeId, src, caption }) {
  return (
    <div className="video-embed-wrap">
      <div className="video-embed-frame">
        {youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={caption || 'lesson video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <video src={src} controls preload="metadata" />
        )}
      </div>
      {caption && <div className="video-embed-caption">{caption}</div>}
    </div>
  )
}
