/* eslint-disable react/prop-types */

function ContactSection({ icon, title, content }) {
  return (
      <div className="flex space-x-4">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-darkBlue mb-2">{title}</h3>
        {Array.isArray(content) ? (
          content.map((item, index) => (
            <div key={index}>
              {typeof item === 'object' ? (
                <>
                  <p className="text-gray-600 font-medium">{item.label}</p>
                  {item.numbers.map((number, idx) => (
                    <a key={idx} href={`tel:${number}`} className="block text-blue-600 hover:underline">
                      {number}
                    </a>
                  ))}
                </>
              ) : (
                <p className="text-gray-600">{item}</p>
              )}
            </div>
          ))
        ) : (
          <a href={`mailto:${content}`} className="text-blue-600 hover:underline">
            {content}
          </a>
        )}
      </div>
    </div>
  )
}

export default ContactSection




